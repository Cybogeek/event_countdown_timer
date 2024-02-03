function calculateLovePercentage(name1, name2) {
  let sum1 = sumChar(name1.toUpperCase());
  let sum2 = sumChar(name2.toUpperCase());

  let average = (sum1 + sum2) / 2;
  let lovepercentage = Math.floor(average % 101);
  return lovepercentage;
}

function sumChar(name) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i) - 64; // consider uppercase Characters received.
  }
  return sum;
}

$(document).ready(() => {
  $("#calculate-btn").click(() => {
    let lover1 = $("#lover1").val();
    let lover2 = $("#lover2").val();

    if (lover1 !== "" && lover2 !== "") {
      // let lovepercentage=Math.floor(Math.random()*101);
      let lovepercentage = calculateLovePercentage(lover1, lover2);
      $("#result").html(
        lover1 +
          " and " +
          lover2 +
          " have a " +
          lovepercentage +
          " % compatibility!"
      );
      $("#lover1").val("");
      $("#lover2").val("");
    } else {
      $("#result").html("Please enter both names correctly. ");
    }
  });
});
