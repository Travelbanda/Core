/*!
 * V4Fire Core
 * https://github.com/V4Fire/Core
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Core/blob/master/LICENSE
 */

/// <reference path="node_modules/collection.js/collection.d.ts"/>
/// <reference path="node_modules/sugar/sugar-extended.d.ts"/>

declare type HashTable<T> = {[key: string]: T};

declare function Any(obj: any): any;
declare function stderr(err: any);
declare function infinity<T>(): Iterable<T>;

declare function i18n(strings: any | string[], ...expr: any[]): string;
declare function t(strings: any | string[], ...expr: any[]): string;
declare function l(strings: any | string[], ...expr: any[]): string;

declare function requestIdleCallback(cb: Function): number;
declare function cancelIdleCallback(id: number): number;

interface ObjectConstructor {
	mixin<T>(
		params: CollectionJS.ExtendParams<T> & CollectionJS.Async,
		target?: T,
		...source: any[]
	): Promise<T & CollectionJS.HashTable> & CollectionJS.ThreadObj;

	mixin<T>(
		deepOrParams: boolean | CollectionJS.ExtendParams<T>,
		target?: T,
		...source: any[]
	): T & CollectionJS.HashTable;

	fastClone<T extends Object>(
		obj: T,
		params?: {
			replacer?: (key: string, value: any) => any,
			reviver?: (key: string, value: any) => any
		}
	): T;

	fastCompare(a: any, b: any): boolean;
	parse(value: any): any;
	createMap<T extends Object>(obj: T): T & HashTable<any>;
	fromArray(arr: any[]): HashTable<boolean>;
	isTable(obj: any): obj is HashTable<any>;
}

interface Object {
	toSource(): string;
}

interface DateConstructor {
	getWeekDays(): string[]
}