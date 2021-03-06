'use strict';

import test from 'ava';
import {Cell} from '../index';

test('Test creation of a single Cell container', t => {
	const cell = new Cell(0, 0);

	t.truthy(cell);
	t.is(cell.row, 0);
	t.is(cell.col, 0);

	const cell2 = new Cell(1, 1);

	t.truthy(cell2);
	t.is(cell2.row, 1);
	t.is(cell2.row, 1);

	cell.link(cell2);

	t.is(cell.links.length, 1);
	t.is(cell2.links.length, 1);
	t.false(cell.linksEmpty);

	t.true(cell.linked(cell2));
	t.true(cell2.linked(cell));

	cell.unlink(cell2);

	t.is(cell.links.length, 0);
	t.is(cell2.links.length, 0);
	t.true(cell.linksEmpty);

	t.false(cell.linked(cell2));
	t.false(cell2.linked(cell));
});

test('Test bitmap representations for a cell', t => {
	const cell = new Cell(2, 2);

	cell.north = new Cell(2, 1);
	t.truthy(cell.north);

	cell.east = new Cell(3, 2);
	t.truthy(cell.east);

	cell.south = new Cell(2, 3);
	t.truthy(cell.south);

	cell.west = new Cell(1, 2);
	t.truthy(cell.west);

	t.truthy(cell);
	t.is(cell.row, 2);
	t.is(cell.col, 2);
	t.is(cell.repr, 15);

	cell.link(cell.north);
	t.true(cell.linked(cell.north));
	t.is(cell.repr, 7);
	cell.unlink(cell.north);
	t.is(cell.repr, 15);

	cell.link(cell.east);
	t.true(cell.linked(cell.east));
	t.is(cell.repr, 11);
	cell.unlink(cell.east);
	t.is(cell.repr, 15);

	cell.link(cell.south);
	t.true(cell.linked(cell.south));
	t.is(cell.repr, 13);
	cell.unlink(cell.south);
	t.is(cell.repr, 15);

	cell.link(cell.west);
	t.true(cell.linked(cell.west));
	t.is(cell.repr, 14);
	cell.unlink(cell.west);
	t.is(cell.repr, 15);
});

test('Test Cell neighbors', t => {
	const cell = new Cell(0, 0);
	const neighbor = new Cell(1, 1);

	t.truthy(cell);
	t.truthy(neighbor);
	t.true(cell.linksEmpty);
	t.is(cell.neighbors.length, 0);

	cell.link(neighbor);
	cell.north = neighbor;
	t.false(cell.linksEmpty);
	t.is(cell.neighbors.length, 1);

	cell.south = neighbor;
	t.false(cell.linksEmpty);
	t.is(cell.neighbors.length, 2);
});

test('Test Cell unlinked neighbors', t => {
	const cell = new Cell(1, 1);
	const north = new Cell(1, 0);
	const south = new Cell(1, 2);
	const east = new Cell(0, 1);
	const west = new Cell(2, 1);

	t.truthy(cell);
	t.truthy(north);
	t.truthy(south);
	t.truthy(east);
	t.truthy(west);

	cell.north = north;
	cell.south = south;
	cell.east = east;
	cell.west = west;

	t.true(cell.linksEmpty);
	t.is(cell.neighbors.length, 4);
	t.is(cell.unvisitedNeighbors.length, 4);
	t.is(cell.visitedNeighbors.length, 0);

	cell.link(north);

	t.is(cell.neighbors.length, 4);
	t.is(cell.unvisitedNeighbors.length, 3);
	t.is(cell.visitedNeighbors.length, 1);

	t.is(cell.visitedNeighbors[0], north);
	t.is(cell.unvisitedNeighbors[0], south);
	t.is(cell.unvisitedNeighbors[1], east);
	t.is(cell.unvisitedNeighbors[2], west);

	cell.link(south);
	cell.link(east);
	cell.link(west);

	t.is(cell.neighbors.length, 4);
	t.is(cell.unvisitedNeighbors.length, 0);
	t.is(cell.visitedNeighbors.length, 4);

	t.is(cell.visitedNeighbors[0], north);
	t.is(cell.visitedNeighbors[1], south);
	t.is(cell.visitedNeighbors[2], east);
	t.is(cell.visitedNeighbors[3], west);
});
