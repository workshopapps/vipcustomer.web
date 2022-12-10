function parseToArray(string) {
  const firstRow = string.slice(0, string.indexOf("\n")).split(",");

  let otherRow = string.slice(string.indexOf("\n") + 1).split("\n");
  // .pop();

  // remove last empty string
  otherRow = otherRow.slice(0, otherRow.length - 1);

  const array = otherRow.map((row) => {
    const rowAsArray = row.split(",");

    let object = {};
    firstRow.forEach((val, index) => {
      if (val.trim().toLowerCase() === "age") {
        object[val.trim().toLowerCase()] =
          Number(rowAsArray[index].trim()) || 0;
      } else {
        object[val.trim().toLowerCase()] = rowAsArray[index]
          .trim()
          .toLowerCase();
      }
    });

    return object;
  });
  return array;
}

function csvParser(file, fetch) {
  let fileString;

  const fileReader = new FileReader();
  fileReader.addEventListener("load", function () {
    fileString = this.result;
    if (fileString.trim()) {
      const array = parseToArray(fileString);
      fetch(array);
    }
  });
  fileReader.readAsText(file);
}

export default csvParser;
