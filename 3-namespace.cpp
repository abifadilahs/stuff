#include <iostream>
using std::cout; //add declartaion namespace "using" before "std::..."
int main() {
    cout << "Enter two numbers:" << std::endl; //remove "std::" before "cout"
    int n1 = 0, n2 = 0;
    std::cin >> n1 >> n2;
    cout << "The sum of " << n1 << " and " << n2 //remove "std::" before "cout"
    << " is " << n1 + n2 << std::endl;
}
//it's work
//to compile program : g++ -o namespace.exe namespace.cpp
// run program after compile type : ./namespace.exe
// if you remove "std::.." from cin, it get error, because you doesnt declared before