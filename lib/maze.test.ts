'use strict';

import test from 'ava';
import {AlgorithmType, Maze} from '../index';

test('Creates an Maze object instance using BinaryTree', t => {
	const maze = new Maze(10, 10, AlgorithmType.BinaryTree);
	t.truthy(maze);
	t.is(maze.cols, 10);
	t.is(maze.rows, 10);
	t.is(maze.algorithm, AlgorithmType.BinaryTree);
	t.true(typeof maze.string === 'string');
	t.truthy(maze.repr);
	console.log(`BinaryTree(10,10)\n${maze.string}`);
	console.log(maze.srepr);

	maze.rebuild(AlgorithmType.BinaryTree);
	t.is(maze.cols, 10);
	t.is(maze.rows, 10);
	t.is(maze.algorithm, AlgorithmType.BinaryTree);
	console.log(`BinaryTree(10,10) rebuild =>\n${maze.string}`);

	maze.resize(5, 5);
	t.is(maze.cols, 5);
	t.is(maze.rows, 5);
	t.is(maze.algorithm, AlgorithmType.BinaryTree);
	console.log(`BinaryTree(5,5) resize =>\n${maze.string}`);
	console.log(maze.srepr);

	t.truthy(maze.grid.deadends);
});

test('Create a maze with bad parameters for sizing', t => {
	const maze = new Maze(-1, -1);

	t.truthy(maze);
	t.is(maze.cols, 1);
	t.is(maze.rows, 1);
	t.is(maze.algorithm, AlgorithmType.RecursiveBacktracker);
	console.log(`BinaryTree(1,1) resize =>\n${maze.string}`);
	console.log(maze.srepr);
});

test('Creates a Maze object instance using Sidewinder', t => {
	const maze = new Maze(10, 10, AlgorithmType.Sidewinder);
	t.truthy(maze);
	t.is(maze.cols, 10);
	t.is(maze.rows, 10);
	t.is(maze.algorithm, AlgorithmType.Sidewinder);
	t.true(typeof maze.string === 'string');
	console.log(`Sidewinder(10,10)\n${maze.string}`);
	console.log(maze.srepr);
});

test('Creates a Maze object instance using AldousBroder', t => {
	const maze = new Maze(10, 10, AlgorithmType.AldousBroder);
	t.truthy(maze);
	t.is(maze.cols, 10);
	t.is(maze.rows, 10);
	t.is(maze.algorithm, AlgorithmType.AldousBroder);
	t.true(typeof maze.string === 'string');
	console.log(`AldousBroder(10,10)\n${maze.string}`);
	console.log(maze.srepr);
});

test('Creates a Maze object instance using Wilsons algorithm', t => {
	const maze = new Maze(10, 10, AlgorithmType.Wilsons);
	t.truthy(maze);
	t.is(maze.cols, 10);
	t.is(maze.rows, 10);
	t.is(maze.algorithm, AlgorithmType.Wilsons);
	t.true(typeof maze.string === 'string');
	console.log(`Wilsons(10,10)\n${maze.string}`);
	console.log(maze.srepr);
});

test('Creates a Maze object instance using the HuntAndKill algorithm', t => {
	const maze = new Maze(10, 10, AlgorithmType.HuntAndKill);
	t.truthy(maze);
	t.is(maze.cols, 10);
	t.is(maze.rows, 10);
	t.is(maze.algorithm, AlgorithmType.HuntAndKill);
	t.true(typeof maze.string === 'string');
	console.log(`HuntAndKill(10,10)\n${maze.string}`);
	console.log(maze.srepr);
});

test('Creates a Maze object instance using the RecursiveBacktracker algorithm', t => {
	const maze = new Maze(10, 10, AlgorithmType.RecursiveBacktracker);
	t.truthy(maze);
	t.is(maze.cols, 10);
	t.is(maze.rows, 10);
	t.is(maze.algorithm, AlgorithmType.RecursiveBacktracker);
	t.true(typeof maze.string === 'string');
	console.log(`RecursiveBacktracker(10,10)\n${maze.string}`);
	console.log(maze.srepr);
});
