import fs from "fs";

const MAIN_TEST_LOG_FILE = "./test_results/test_summary.txt";
const DETAIL_TEST_LOG_FILE = "./test_results/test_details.txt";

class TestLogger {
    constructor() {
        this.results = new Map();
    }

    logSingleTestResult(testName, passed) {
        this.results.set(testName, passed);
    }

    saveResults() {
        this.saveSummaryResult(MAIN_TEST_LOG_FILE)
        this.saveDetailedResults(DETAIL_TEST_LOG_FILE)
    }

    saveSummaryResult(filePath) {
        const overallTestResult = ![...this.results.values()].includes(false);
        const passedTestsCount = [...this.results.values()].filter(x => x === true).length;
        const allTestsCount = [...this.results.values()].length;

        fs.writeFileSync(filePath, `TASK COMPLETED: ${overallTestResult}\n`, (err) => {
            if (err) throw err;
        });
        fs.appendFileSync(filePath, `PASSED TESTS: ${passedTestsCount} OF ${allTestsCount}\n`, (err) => {
            if (err) throw err;
        });
    }

    saveDetailedResults(filePath) {
        fs.writeFileSync(filePath, ``, (err) => {
            if (err) throw err;
        });

        this.results.forEach((value, key) => {
            const currentDate = new Date();
            fs.appendFileSync(filePath, `${currentDate};${key};${value}\n`, (err) => {
                if (err) throw err;
            });
        })

    }
}

export { TestLogger };
