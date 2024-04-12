interface ResultObject {
  [key: string]: string;
}

function parseObject(str: string): ResultObject {
  const lines = str.trim().split("\n");
  const obj: ResultObject = {};

  lines.forEach((line) => {
    const match = line.match(/^(\S+):\s*(.+)$/);
    if (match) {
      const [, key, value] = match;
      obj[key] = value;
    }
  });

  return obj;
}

export default parseObject;
