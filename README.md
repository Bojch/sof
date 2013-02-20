# Sof - Serial Object Form v0.0.3

## Description

The Sof javasciprt serialize data from HTML form to object or JSON

## Demo

Just clone it on your server and simple test it ;)

## Examples

	// without othore options
 	$("form-slector").sof().get();

	// like this you  can set more options
 	$("form-slector").sof({
 		// [json|object] - this two objects can be returned
 		type : "object" - [json|object]

 		// By select or checkbox change one child to string
 		child_to_string : boolean
 	}).get();

 	// also set type like this
 	$("form-slector").sof().get('object');
 	$("form-slector").sof().setType('object').get();

## General Info

* Author: Bojan Mazej
