import {RowID , RowElement} from './interface.js';

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): void;
export function getRow(rowId: RowID): RowElement;