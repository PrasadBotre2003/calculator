#include <iostream>
#include <string>

using namespace std;

// Function to check if a character is an "xvowel"
bool isXvowel(char c) {
    return string("abeiout").find(c) != string::npos; // Check if character is in "abeiout"
}

// Function to process the input string
string process(const string &input) {
    string result;
    bool isPrevXvowel = false;
    int xvowelCount = 0;

    for (char c : input) {
        if (isXvowel(c)) {
            xvowelCount++;
            if (xvowelCount == 1) {
                result += c; // Append the first xvowel
            }
            isPrevXvowel = true;
        } else {
            if (isPrevXvowel && xvowelCount > 1) {
                result.pop_back(); // Remove the last appended xvowel
            }
            result += c; // Append non-xvowel character
            isPrevXvowel = false;
            xvowelCount = 0;
        }
    }

    // Handle the case where the string ends with consecutive xvowels
    if (isPrevXvowel && xvowelCount > 1) {
        result.pop_back();
    }

    return result;
}

int main() {
    string input;
    cout << "Enter a string: ";
    getline(cin, input);

    cout << "Processed string: " << process(input) << endl;

    return 0;
}
