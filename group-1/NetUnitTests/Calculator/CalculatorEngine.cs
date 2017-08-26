using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    public class CalculatorEngine
    {
        public int Calculate(int first, int second, string op)
        {
            if ((second == 0) && (op == "/"))
            {
                if (first != 0)
                {
                    throw new ArgumentException("Invalid arguments, cannot divide by zero");
                }
            }

            var validOperators = new string[] { "+", "*", "/", "-" };
            if (!validOperators.Contains(op))
            {
                return 0;
            }

            switch (op)
            {
                case "+":
                    return first + second;
                case "-":
                    return first - second;
                case "*":
                    return first * second;
                case "/":
                    return first / second;
            }

            // cannot unit test this line - added to please the compiler
            return 0;
        }

    }
}
