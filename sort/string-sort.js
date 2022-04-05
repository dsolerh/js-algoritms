const a = ["alice", "bernan", "ai", "doris"];
console.log(a.sort((s1, s2) => (s1.toLowerCase() > s2.toLowerCase() ? 1 : -1)));
