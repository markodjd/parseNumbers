const table = {
  "0": [" _  ", "| | ", "|_| "],
  "1": ["    ", "  | ", "  | "],
  "2": [" _  ", " _| ", "|_  "],
  "3": [" _  ", " _| ", " _| "],
  "4": ["    ", "|_| ", "  | "],
  "5": [" _  ", "|_  ", " _| "],
  "6": [" _  ", "|_  ", "|_| "],
  "7": [" _  ", "  | ", "  | "],
  "8": [" _  ", "|_| ", "|_| "],
  "9": [" _  ", "|_| ", " _| "],
};

let result = "";

function parse(nums) {
  if (nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j <= 9; j++) {
        if (table[`${j}`].join("") === nums[i].join("")) {
          result += j;
        }
      }
    }
  }

  if (!nums || nums.length === 0) result = "No input";
  if (nums && result.length < nums.length) result = "Not a valid input";

  console.log(result);
}

parse();
