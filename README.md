### Use this package to get a list of Month Names with capitalized first letter as array in your desired language,
if you enter the correct language code as string as parameter.

# Installation

npm install months_in_language


# Usage:

require the package after installing:

`const monthNames = require("months_in_language");`


'monthNames.getAllMonthNames("en");' 

returns you an array of Months like this:

'[
  'January',   'February',
  'March',     'April',
  'May',       'June',
  'July',      'August',
  'September', 'October',
  'November',  'December'
]'


'monthNames.getSingleMonthName("en", 4);' 

returns you the Month April as String.


### At the moment the languages English, German, French and Italian are available
