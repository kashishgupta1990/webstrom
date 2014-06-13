var a = 9;
var result;

//TODO asdasda
switch (a) {
    case 1:
    {
        result = 'Number - 1';
    }
        break;
    case 2:
    {
        result = 'Number -2';
    }
        break;
    case 9:
    {
        result = 'INT - 9';
    }
        break;
    case '9':
    {
        result = 'String - 9';
    }
        break;
    default:
    {
        result = 'I am default';
    }
        break;
}
console.log(result);