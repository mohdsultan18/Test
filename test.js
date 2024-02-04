function processList(inputList) {
    // Check if the length of the input list is a multiple of 10
    if (inputList.length % 10 !== 0) {
        throw new Error("The length of the list must be a multiple of 10");
    }

    // Remove items at positions which are a multiple of 2 or 3
    const processedList = inputList.filter((_, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);

    return processedList;
}

// Testing the function
try {
    // Test case 1: Valid input
    const testList1 = Array.from({ length: 100 }, (_, index) => index + 1); // List of integers from 1 to 100
    const processedResult1 = processList(testList1);
    console.log("Processed List 1:", processedResult1);

    // Test case 2: Invalid input (length not multiple of 10)
    const testList2 = Array.from({ length: 110 }, (_, index) => index + 1); // List of integers from 1 to 110
    const processedResult2 = processList(testList2);
    console.log("Processed List 2:", processedResult2); // This line should not be reached
} catch (error) {
    console.error("Error:", error.message);
}
