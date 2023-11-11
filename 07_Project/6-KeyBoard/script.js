const insert = document.getElementById("main");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
   <table>
        <tr>
        <th>key</th>
        <th>keyCode</th>
        <th>Code</th>
        </tr>
        <tr>
        <td>${e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
        </tr>

    </table>
    `;
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e.code);
});
