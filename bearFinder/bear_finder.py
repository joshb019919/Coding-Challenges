""" Read the first line of a text file and output whether or not that
line contains the word “bear”.

Usage: python[3] text_file.txt
"""

from sys import argv, exit

def main():
    # Give the text file argument a more descriptive name
    txt_file = argv[1]

    with open(txt_file, "r") as f:
        # Read only the first line, as that is all this project requires
        line = f.readline()

        # Check the file for the word "bear"
        if "bear" in line.lower():
            print("Your text file has a BEAR on the first line!")
        else:
            print("I can't seem to find the word 'bear', anywhere!")


if __name__ == "__main__":
    # User didn't supply the right arguments at the command line
    if len(argv) != 2:
        print("Usage: python[3] text_file.txt")
        exit(1)

    main()
