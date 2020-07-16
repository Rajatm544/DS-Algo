# Data Structures

-   They are a collection of data, with some relation between the values that are held. In JS, we can create classes to implement the various different data structures.
-   Classes in JavaScript are part of the ES6 updates. Following is a brief overview of what classes are:

## Classes

-   They are blueprints to create some objects, or to instatiate them upon being rendered. A way to think of them is like building a cookie cutter, that we use to create cookies (instance of a class, or _objects_).
-   Syntax: <br>

    ```javascript
    class Student() {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    ```

    **Note**: Here **this** is referring to the individual instance (i.e, the object) of the class, not the class itself.

-   **Instance methods** are defined within the class, and outside the constructor, and they are methods that can work on a specific instance (i.e, object) only, but not on a class level
    Ex: <br>

    ```javascript
    class Student() {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        // Instance method
        fullName() {
            return `Your full name is ${this.firstName} ${this.lastName}`
        }
    }

    const jack = new Student("Jack", "Chan");
    jack.fullName();
    ```

-   **Class methods** are the functions that are a part of the class as a whole, **they cannot be accessed via an instance**. They are prefixed with the keyword **static** to define them within a class. These are more like utility functions, and are not that commonly used in implementing data structures.
