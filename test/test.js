import { equalStrings } from "../src/task.js";
import { TestLogger } from "./test_logger.js";
import assert from "assert";

const logger = new TestLogger();

describe("Task Test", () => {

    after(() => {
        logger.saveResults();
    });

    it("test_should_compare_two_identical_strings", () => {
        const s1 = "konstantynopolitaneczka";
        const s2 = "konstantynopolitaneczka";
        const result = equalStrings(s1, s2);
        logger.logSingleTestResult("test_should_compare_two_identical_strings", result == true);
        assert.strictEqual(result, true);
    });

    it("test_should_compare_two_different_strings", () => {
        const s1 = "konstantynopolitaneczka";
        const s2 = "some other string";
        const result = equalStrings(s1, s2);
        logger.logSingleTestResult("test_should_compare_two_different_strings", result == false);
        assert.strictEqual(result, false);
    });

    it("test_should_compare_two_empty_strings", () => {
        const s1 = "";
        const s2 = "";
        const result = equalStrings(s1, s2);
        logger.logSingleTestResult("test_should_compare_two_empty_strings", result == true);
        assert.strictEqual(result, true);
    });

    it("test_should_compare_two_strings_where_one_is_null", () => {
        const s1 = "konstantynopolitaneczka";
        const s2 = "";
        const result = equalStrings(s1, s2);
        logger.logSingleTestResult("test_should_compare_two_strings_where_one_is_null", result == false);
        assert.strictEqual(result, false);
    });

    it("test_should_compare_empty_string_and_null_string", () => {
        const s1 = "";
        const s2 = null;
        const result = equalStrings(s1, s2);
        logger.logSingleTestResult("test_should_compare_empty_string_and_null_string", result == true);
        assert.strictEqual(result, true);
    });

    it("test_should_compare_two_null_strings", () => {
        const s1 = null;
        const s2 = null;
        const result = equalStrings(s1, s2);
        logger.logSingleTestResult("test_should_compare_two_null_strings", result == true);
        assert.strictEqual(result, true);
    });

});
