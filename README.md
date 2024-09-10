## Dependencies

To compile and use this project, you might need to include `<bsd/string.h>`. If you encounter any issues related to this header file, you may need to install the `libbsd` library.

### Installation Instructions

For Debian-based systems (e.g., Ubuntu), you can install the `libbsd` library using the following command:
Open a terminal and run the following command:

   ```sh
   sudo apt-get update
   sudo apt-get install libbsd-dev
```
For macOS, you can use Homebrew:

```sh
brew install libbsd
```

Next compile your tests/main.c 
Example
```sh
gcc tests/main.c libft.a -lbsd
```
