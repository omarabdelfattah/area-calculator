    /*
       * Ask the user to enter the name of the shape he wants to calc area for
       * Ask the user for the dimensions of that shape
       * Calculate the area and show it to user
    */

    function calcArea(shape){
        let area = 0;
        switch(shape) {
            case "circle":
              area =  circleCalc();
                break;
            case "triangle":
            area =    triangleCalc();
                break;
            case "square":
            area =    squareCalc();
                break;
            case "rectangle":
            area =    recatangleCalc();
                break;
            case "parallelogram":
            area =    parrallelogramCalc();
                break;
            case "trapezium":
            area =    trapeziumCalc();
                break;
            case "ellipse":
            area =     ellipseCalc();
                break;
            default:
                alert("Invalid shape");
                break;
        }
        return area;
    }

    function circleCalc(){
        let radius = Number(prompt("Enter the radius"));
        let area = Math.PI * radius * radius;
        return area;
    }

    function triangleCalc(){
        let base = Number(prompt("Enter the base"));
        let height = Number(prompt("Enter the height"));
        let area = base * height / 2;
        return area;
    }

    function squareCalc(){
        let side = Number(prompt("Enter the side"));
        let area = side * side;
        return area;
    }

    function recatangleCalc(){
        let length = Number(prompt("Enter the length"));
        let width = Number(prompt("Enter the width"));
        let area = length * width;
        return area;
    }

    function parrallelogramCalc(){
        let base = Number(prompt("Enter the base"));
        let height = Number(prompt("Enter the height"));
        let area = base * height;
        return area;
    }

    function trapeziumCalc(){
        let base1 = Number(prompt("Enter the base1"));
        let base2 = Number(prompt("Enter the base2"));
        let height = Number(prompt("Enter the height"));
        let area = (base1 + base2) * height / 2;
        return area;
    }

    function ellipseCalc(){
        let radius1 = Number(prompt("Enter the minor axis"));
        let radius2 = Number(prompt("Enter the major axis"));
        let area = Math.PI * radius1 * radius2;
        return area;
    }



    let quit = false;
    while(quit != true){
        let shape = prompt("Enter shape");
        let area = calcArea(shape);
        alert("Area of the " + shape + " is " + area);
        quit = prompt("Do you want to quit? (y/n)") == "y" ? true : false;
    }
