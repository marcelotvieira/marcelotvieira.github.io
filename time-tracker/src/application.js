function dados() {
  fetch("data.json")
    .then((resposta) => {
      return resposta.json();
    })
    .then((jsonData) => {
      var timeFrames = document.getElementById("time-frames");
      var i = 0;
      var state = document.querySelector('input[name="period"]:checked').value;

      switch (state) {
        case "daily":

          timeFrames.innerHTML = "";
          document.getElementById("daily").style.color = "rgb(223, 232, 245)";
          document.getElementById("weekly").style.color = "hsl(235, 45%, 61%)";
          document.getElementById("monthly").style.color = "hsl(235, 45%, 61%)";
          jsonData.map((item) => {
            timeFrames.innerHTML +=
              '<li class="frame" id="frame' +
              i +
              '"><div class="frame-header"></div><div class="frame-content">              <div class="frame-top"><label for="" class="title">' +
              jsonData[i].title +
              '</label><img src="src/images/icon-ellipsis.svg" alt=""></div><div class="frame-bottom"><span class="time">' +
              jsonData[i].timeframes.daily.current +
              "hrs</span>                <p>Last Week - " +
              jsonData[i].timeframes.daily.previous +
              "hrs</p></div></div></li>";
            i++;
          });
          break;

        case "weekly":

          timeFrames.innerHTML = "";
          document.getElementById("weekly").style.color = "rgb(223, 232, 245)";
          document.getElementById("daily").style.color = "hsl(235, 45%, 61%)";
          document.getElementById("monthly").style.color = "hsl(235, 45%, 61%)";
          jsonData.map((item) => {
            timeFrames.innerHTML +=
              '<li class="frame" id="frame' +
              i +
              '"><div class="frame-header"></div><div class="frame-content">              <div class="frame-top"><label for="" class="title">' +
              jsonData[i].title +
              '</label><img src="src/images/icon-ellipsis.svg" alt=""></div><div class="frame-bottom"><span class="time">' +
              jsonData[i].timeframes.weekly.current +
              "hrs</span>                <p>Last Week - " +
              jsonData[i].timeframes.weekly.previous +
              "hrs</p></div></div></li>";
            i++;
          });
          break;

        case "monthly":
            
          timeFrames.innerHTML = "";
          document.getElementById("monthly").style.color = "rgb(223, 232, 245)";
          document.getElementById("daily").style.color = "hsl(235, 45%, 61%)";
          document.getElementById("weekly").style.color = "hsl(235, 45%, 61%)";
          jsonData.map((item) => {
            timeFrames.innerHTML +=
              '<li class="frame" id="frame' +
              i +
              '"><div class="frame-header"></div><div class="frame-content">              <div class="frame-top"><label for="" class="title">' +
              jsonData[i].title +
              '</label><img src="src/images/icon-ellipsis.svg" alt=""></div><div class="frame-bottom"><span class="time">' +
              jsonData[i].timeframes.monthly.current +
              "hrs</span>                <p>Last Week - " +
              jsonData[i].timeframes.monthly.previous +
              "hrs</p></div></div></li>";
            i++;
          });
          break;
      }
    });
}

dados();
