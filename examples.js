// examples:

const content = "Hello world!";
const styles = {
  color: "red",
  fontSize: "20px",
  backgroundColor: "yellow",
};
const styledPost1 = createStyledPost(content, styles);
console.log(styledPost1);
// Outputs: [color=red;font-size:20px;background-color:yellow]Hello, world![/color]

/////////////////////////////////////////////////////////////////////////////////////////////

const innerContent = createStyledPost("Inner text", { color: "blue" });
const outerContent = createStyledPost(innerContent, {
  fontSize: "18px",
  color: "green",
});
console.log(outerContent);
// Outputs: [color=green;font-size:18px][color=blue]Inner text[/color][/color]

/////////////////////////////////////////////////////////////////////////////////////////////

const tableHead = ["POS", "TEAM", "PL", "W", "D", "L", "F", "A", "PTS"];
const tableBody = [4, "X.Z.Team", 6, 4, 0, 2, 33, 15, 12];

const tableHeadStyle = {
  display: "grid",
  gridTemplate: "auto / 40px 220px repeat(7, 40px)",
  width: "540px",
  background: "linear-gradient(to bottom, #4A90E2, #1C3B70)",
  padding: "10px 0",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "bold",
  borderBottom: "2px solid #1C3B70",
};

const tableRowStyle = {
  display: "grid",
  gridTemplate: "auto / 40px 220px repeat(7, 40px)",
  width: "540px",
  color: "#333",
  padding: "8px 0",
  textAlign: "center",
  fontSize: "13px",
  backgroundColor: "#F7F9FC",
  borderBottom: "1px solid #DDD",
};

// Create styled table head
const styledTableHead = createStyledPost(
  tableHead.map((column) => createStyledPost(column, { color: "white" })),
  tableHeadStyle
);

// Create styled table row
const styledTableRow = createStyledPost(
  tableBody.map((column) => createStyledPost(column)),
  tableRowStyle
);

console.log(styledTableHead + styledTableRow);
// Outputs : [color=black;display:grid;grid-template:auto / 40px 220px repeat(7, 40px);width:540px;background:linear-gradient(to bottom, #4A90E2, #1C3B70);padding:10px 0;text-align:center;font-size:14px;font-weight:bold;border-bottom:2px solid #1C3B70][color=white;]POS[/color][color=white;]TEAM[/color][color=white;]PL[/color][color=white;]W[/color][color=white;]D[/color][color=white;]L[/color][color=white;]F[/color][color=white;]A[/color][color=white;]PTS[/color][/color][color=#333;display:grid;grid-template:auto / 40px 220px repeat(7, 40px);width:540px;padding:8px 0;text-align:center;font-size:13px;background-color:#F7F9FC;border-bottom:1px solid #DDD][color=black;]4[/color][color=black;]X.Z.Team[/color][color=black;]6[/color][color=black;]4[/color][color=black;]0[/color][color=black;]2[/color][color=black;]33[/color][color=black;]15[/color][color=black;]12[/color][/color]
