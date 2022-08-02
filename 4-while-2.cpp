#include <iostream>
int main() {
    int count = 1, sum = 0, val;
    std::cout << "enter the fookin number untill which the sum has to be calculated ";
    std::cin >> val;
    while (count <= val) {
        sum += count; //
        count = count + 1;
    }
    std::cout << "sum of 1 to " << val << " = " << sum <<std::endl;
    return 0;
}
//work