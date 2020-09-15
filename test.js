const newData = JSON.stringify({
  name: "shit",
  email: "shit",
  desciptiom: "shit",
});

console.log(newData);
fetch("https://react-hooks-update-74cc9.firebaseio.com/response.json", {
  method: "POST",
  body: newData,
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    console.log(res);
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  })
  .then((resData) => {
    alert("Thank you for your message.");
    document.reload();
  })
  .catch((err) => {
    console.log(err);
    alert("shit");
  });
