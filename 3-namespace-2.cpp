#include <iostream>
using std::cout;
using std::cin;
using std::endl;

int main() {
    cout << "Enter two numbers:" << endl; //remove "std::.." before "end;"
    int n1 = 0, n2 = 0;
    cin >> n1 >> n2; //remove "std::.."
    cout << "The sum of " << n1 << " and " << n2
    << " is " << n1 + n2 << endl;
}
//it's work