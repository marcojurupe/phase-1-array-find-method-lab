// code your solution here
function superbowlWin(record) {
  let findBroncoWin = record.find(({ result }) => record.result === "W");
  if (findBroncoWin) {
    return findBroncoWin["year"];
  }
}
