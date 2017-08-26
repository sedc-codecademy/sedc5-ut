using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Calculator;

namespace CalculatorTests
{
    [TestClass]
    public class CalculatorUnitTests
    {
        private CalculatorEngine engine;
        private double Epsilon = 0.000001;

        [TestInitialize]
        public void CreateCalculatorEngine()
        {
            engine = new CalculatorEngine();
        }

        [TestMethod]
        public void Calculator_Multiplies_Three_With_Five_And_Returns_Fifteen()
        {
            // 1. Arrange
            var first = 3;
            var second = 5;
            var op = "*";
            var expected = 15;
            // 2. Act
            var actual = engine.Calculate(first, second, op);
            // 3. Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void Calculator_Adds_Two_And_Three_And_Returns_Five()
        {
            // 1. Arrange
            var first = 2;
            var second = 3;
            var op = "+";
            var expected = 5;
            // 2. Act
            var actual = engine.Calculate(first, second, op);
            // 3. Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void Calculator_Divide_Fifteen_And_Five_Returns_Three()
        {
            // 1. Arrange
            var first = 15;
            var second = 5;
            var op = "/";
            var expected = 3;
            // 2. Act
            var actual = engine.Calculate(first, second, op);
            // 3. Assert
            Assert.AreEqual(actual, expected);
        }

        [TestMethod]
        public void Calculator_Invalid_Operation_Returns_Zero()
        {
            // 1. Arrange
            var first = 2;
            var second = 3;
            var op = "soberi";
            var expected = 0;
            // 2. Act
            var actual = engine.Calculate(first, second, op);
            // 3. Assert
            Assert.AreEqual(actual, expected);
        }

        [TestMethod]
        public void Calculator_Subtract_Fifteen_And_Five_Returns_Ten()
        {
            // 1. Arrange
            var first = 15;
            var second = 5;
            var op = "-";
            var expected = 10;
            // 2. Act
            var actual = engine.Calculate(first, second, op);
            // 3. Assert
            Assert.AreEqual(actual, expected);
        }

        [TestMethod]
        public void Calculator_Add_Point_One_And_Point_Two_Returns_Point_Three()
        {
            // 1. Arrange
            var first = 0.1;
            var second = 0.2;
            var op = "+";
            var expected = 0.3;
            // 2. Act
            var actual = engine.Calculate(first, second, op);
            // 3. Assert
            Assert.AreEqual(actual, expected, Epsilon);
        }

        [TestMethod]
        public void Calculator_Divide_Zero_By_Zero_Returns_NaN()
        {
            // 1. Arrange
            var first = 0;
            var second = 0;
            var op = "/";
            // 2. Act
            var actual = engine.Calculate(first, second, op);
            // 3. Assert
            Assert.IsTrue(double.IsNaN(actual));
        }

        [TestMethod]
        public void Calculator_Divide_Three_With_Zero_Should_Throw()
        {
            // 1. Arrange
            var first = 3;
            var second = 0;
            var op = "/";

            // 2. Act
            Action action = () => engine.Calculate(first, second, op);
            // 3. Assert
            Assert.ThrowsException<ArgumentException>(action);
        }
    }
}
