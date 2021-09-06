// Print the numbers from 1 to 100.  For multiples of three
// print “MSU” instead of the number and for multiples of
// five print “Bears”.  For numbers which are multiples of
// both three and five print “MSUBears”.

// printf
#include <stdio.h>

// Start at 1, end at 100 inclusive
#define START 1
#define END 100

int main(void)
{
    for (int i = START; i <= END; i++)
    {
        if ((i % 3 == 0) && (i % 5 == 0))
        {
            printf("MSUBears\n");
        }
        else if (i % 3 == 0)
        {
            printf("MSU\n");
        }
        else if (i % 5 == 0)
        {
            printf("Bears\n");
        }
        else
        {
            printf("%d\n", i);
        }
    }

    return 0;
}
