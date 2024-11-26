import "../shapes";

class ShapeFactory {
    createShape(shape,options){
        switch (shape){
            case "circle":
                return new Circle(options)
            case "line":
                return new Line(options)
            case "rectangle":
                return new Rectangle(options)
            case "triangle":
                return new Triangle(options)
            case "polygon":
                return new Polygon(options)
            case "square":
                return new Square(options)
            default:
                throw new Error(`${shape} is not valid`)
        }
    }
}
export default ShapeFactory