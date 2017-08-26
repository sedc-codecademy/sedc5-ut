using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Calculator;

namespace CalculatorTests
{
    [TestClass]
    public class CalculatorUnitTests
    {
        private CalculatorEngine engine;

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
    }
}
