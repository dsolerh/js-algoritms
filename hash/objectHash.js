// Normalize an object to a consistent string representation
function normalize(value) {
  if (value === null || value === undefined) return 'null';

  const type = typeof value;

  if (type === 'boolean' || type === 'number') {
    return `${value}`;
  }

  if (type === 'string') {
    return `"${value}"`;
  }

  if (Array.isArray(value)) {
    const normalizedElements = value.map(normalize);
    return `[${normalizedElements.join(',')}]`;
  }

  if (type === 'object') {
    const keys = Object.keys(value).sort();
    const pairs = keys.map(key => `"${key}":${normalize(value[key])}`);
    return `{${pairs.join(',')}}`;
  }

  // Handle other types (symbols, bigint, etc.)
  return String(value);
}

// Object hashing function with consistent ordering
function hashObject(obj) {
  return createHash(normalize(obj));
}

// Simple hash function using string manipulation
function createHash(str) {
  let hash = 0;
  if (str.length === 0) return hash.toString();

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  return hash.toString();
}

console.log("123", hashObject(123));
console.log("'abc'", hashObject('abc'));

const obj1 = { prop1: 123, prop2: 'abc', prop3: [1, 2, 3] };
const obj2 = { prop2: 'abc', prop3: [1, 2, 3], prop1: 123 };
console.log(JSON.stringify(obj1), hashObject(obj1));
console.log(JSON.stringify(obj2), hashObject(obj2));