# Makefile for creating a static library libtest.a from test files

# Compiler
CC = gcc

# Compiler flags
CFLAGS = -Wall -Wextra -Werror

# Library name
LIBRARY = libtest.a

# Source files
SRC = test_ft_strlen.c test_ft_isalnum.c test_ft_isalpha.c test_ft_isascii.c \
      test_ft_isdigit.c test_ft_isprint.c test_ft_strncmp.c test_ft_strnstr.c \
      test_ft_strrchr.c test_ft_tolower.c test_ft_toupper.c test_ft_strchr.c \
      test_ft_strlcat.c test_ft_strlcpy.c test_ft_atoi.c test_ft_memcmp.c \
      test_ft_memcpy.c test_ft_memset.c test_ft_memmove.c test_ft_calloc.c \
      test_ft_strdup.c test_ft_memchr.c test_ft_bzero.c

# Object files (replace .c with .o)
OBJ = $(SRC:.c=.o)

# Default target
all: $(LIBRARY)

# Rule to create the static library
$(LIBRARY): $(OBJ)
	@ar rcs $(LIBRARY) $(OBJ)
	@echo "Static library $(LIBRARY) created."

# Rule to compile .c files into .o files
%.o: %.c
	@$(CC) $(CFLAGS) -c $< -o $@
	@echo "Compiled $< into $@."

# Clean target to remove object files and the library
clean:
	@rm -f $(OBJ) 
	@echo "Cleaned up all object files and the static library."

# Phony targets
.PHONY: all clean
