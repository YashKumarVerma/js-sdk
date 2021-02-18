import { convertKintoneRecordsToCsv } from "../csvPrinter";
import {
  KintoneRecordField,
  KintoneFormFieldProperty,
} from "@kintone/rest-api-client";
import fs from "fs";
import path from "path";

const records: Array<{
  [k: string]: KintoneRecordField.OneOf;
}> = require("./fixtures/records.json");

const fields: {
  properties: { [k: string]: KintoneFormFieldProperty.OneOf };
} = require("./fixtures/fields.json");

describe("csvPrinter", () => {
  it("should convert kintone records to csv string correctly", async () => {
    const expectedCsv = await fs.promises.readFile(
      path.resolve(__dirname, "fixtures", "records.csv"),
      "utf8"
    );
    expect(convertKintoneRecordsToCsv(records, fields)).toBe(expectedCsv);
  });
});
