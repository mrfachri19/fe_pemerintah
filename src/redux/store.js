import { createStore } from "redux";

const initialState = {
// initial state
};


const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};

export const noValue = (val) => {
  if (typeof val === "object")
    return val && Object.keys(val).length > 0 ? false : true;
  if (Array.isArray(val)) return val && val.length > 0 ? false : true;
  if (val == "") return true;
  return val ? false : true;
};

export const isNumber = (n) => {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
};

export const validAssignee = (val) => {
  val = String(val);
  if (val.charAt(val.length - 1) == " ") {
    val = val.slice(0, -1);
  }
  if (val.charAt(0) == " ") {
    val = val.substring(1);
  }

  var result = false;

  if (val.replace(/[a-zA-Z0-9]/g, "") == "") {
    result = true;
  }

  return result;
};

export const validKodifikasi = (str, format) => {
  var kodifikasi = String(str).split(".");
  var formatsplit = String(format).split(".");
  var valid = false;

  if (kodifikasi.length == formatsplit.length) {
    valid = true;
  }

  return valid;
};

export const isPeriodeRepetitif = (val) => {
  return val.indexOf(",") > -1;
};

export const isPeriodeKontinue = (val) => {
  return val.indexOf("-") > -1;
};

export const quartalToDate = (val, year) => {
  var result = {};

  if (val && year) {
    var ms = "01",
      me = "12",
      de = "31";
    if (parseInt(val) == 1) {
      me = "03";
    } else if (parseInt(val) == 2) {
      ms = "04";
      me = "06";
      de = "30";
    } else if (parseInt(val) == 3) {
      ms = "07";
      me = "09";
      de = "30";
    } else if (parseInt(val) == 4) {
      ms = "10";
    }
    result.startDate = `${year}-${ms}-01`;
    result.endDate = `${year}-${me}-${de}`;
  }

  return result;
};

export const isStringValidDate = (str, format) => {
  var nospaceStr = String(str).replace(/ /g, "");
  var strsplit = nospaceStr.split("-");
  var formatsplit = format.split("-");
  var valid = false;

  if (
    nospaceStr.length == format.length &&
    strsplit.length == formatsplit.length
  ) {
    valid = true;
    for (var i = 0; i < formatsplit.length; i++) {
      valid = valid && strsplit[i].length == formatsplit[i].length;
    }
    if (valid) valid = moment(nospaceStr, format).isValid();
  }

  return valid;
};

export const getInitial = (val) => {
  var words = val.toUpperCase().split(" ");

  for (var i = 0; i < words.length; i++) {
    if (words[i][0]) {
      words[i] = words[i][0];
    }
  }
  return words.join("").replace(/[^A-Z]+/g, "");
};

export const capitalizeTexteachWord = (val) => {
  if (typeof val !== "string") return val;
  val = val.replace(/ /g, " ");
  val = val.replace(/`/g, "'");
  var words = val.toLowerCase().split(" ");

  for (var i = 0; i < words.length; i++) {
    if (words[i][0]) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }
  return words.join(" ");
};

export const hasValidValue = (val) => {
  if (typeof val === "number") return val > 0;
  if (typeof val === "string") return val && val !== "" && val !== "-";
  if (typeof val === "object") return val && Object.keys(val).length > 0;
  if (Array.isArray(val)) return val && val.length > 0;
  return val;
};

export const getByte = (str) => {
  str = str.toString();
  var sizeNumber = Number(str.replace(/[^0-9.]+/g, ""));
  var sizeUnit = str.replace(sizeNumber, "").toUpperCase();
  var actualSize = sizeNumber;

  if (sizeUnit == "TB") {
    actualSize = sizeNumber * 1024 * 1024 * 1024 * 1024;
  } else if (sizeUnit == "GB") {
    actualSize = sizeNumber * 1024 * 1024 * 1024;
  } else if (sizeUnit == "MB") {
    actualSize = sizeNumber * 1024 * 1024;
  } else if (sizeUnit == "KB") {
    actualSize = sizeNumber * 1024;
  }

  return actualSize;
};

export const changeCurrency = (el, target) => {
  $(".currency-select").html(
    `${$(el).data("label")} <span className="caret"></span>`
  );
  if (target) {
    $(target).val($(el).data("value"));
  }
  $(el).closest(".dropdown-menu").toggleClass("show-custom");
};

export const getStartEndLabel = (start, end) => {
  var startArr = start.split(" ");
  var endArr = end.split(" ");
  var result = "";

  if (start != end) {
    start = "";
    end = "";
    for (var i = 0; i < startArr.length; i++) {
      if (startArr[i] != endArr[i]) {
        start = i == 0 ? startArr[i] : `${start} ${startArr[i]}`;
      }
      end = i == 0 ? endArr[i] : `${end} ${endArr[i]}`;
    }
    result = `${start} - ${end}`;
  } else {
    result = end;
  }
  return result;
};

export const urlify = (text) => {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url) {
    return '<a href="' + url + '">' + url + "</a>";
  });
};

export const findURL = (text) => {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url) {
    return "true";
  });
};

export const truncate = (input) => {
  if (input.length > 45) {
    return input.substring(0, 45) + "...";
  }
  return input;
}

export const todayDate = () => {
  let d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const quartalNow = () => {
  let d = new Date(),
    month = "" + (d.getMonth() + 1),
    year = d.getFullYear(),
    result = "Q";

  if (month < 4) result += "1 - ";
  else if (month < 7) result += "2 - ";
  else if (month < 10) result += "3 - ";
  else result += "4 - ";

  result += year;

  return result;
};

export const compareTime = (val1, val2) => {
  let result = false;
  const time1 = val1.toString().split(":");
  const time2 = val2.toString().split(":");

  if (parseInt(time1[0]) > parseInt(time2[0])) {
    result = true;
  } else if (
    parseInt(time1[0]) == parseInt(time2[0]) &&
    parseInt(time1[1]) > parseInt(time2[1])
  ) {
    result = true;
  }

  return result;
};

const store = createStore(
  changeState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
