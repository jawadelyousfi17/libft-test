#include <stdio.h>
#include <assert.h>
#include "libft.h"
#include <ctype.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include "test.h"


void run_test(char *str) {
    if (strcmp(str, "ft_strlen") == 0) {
        test_ft_strlen();
    } else if (strcmp(str, "ft_isalnum") == 0) {
        test_ft_isalnum();
    } else if (strcmp(str, "ft_isalpha") == 0) {
        test_ft_isalpha();
    } else if (strcmp(str, "ft_isascii") == 0) {
        test_ft_isascii();
    } else if (strcmp(str, "ft_isdigit") == 0) {
        test_ft_isdigit();
    } else if (strcmp(str, "ft_isprint") == 0) {
        test_ft_isprint();
    } else if (strcmp(str, "ft_strncmp") == 0) {
        test_ft_strncmp();
    } else if (strcmp(str, "ft_strnstr") == 0) {
        test_ft_strnstr();
    } else if (strcmp(str, "ft_strrchr") == 0) {
        test_ft_strrchr();
    } else if (strcmp(str, "ft_tolower") == 0) {
        test_ft_tolower();
    } else if (strcmp(str, "ft_toupper") == 0) {
        test_ft_toupper();
    } else if (strcmp(str, "ft_strchr") == 0) {
        test_ft_strchr();
    } else if (strcmp(str, "ft_strlcat") == 0) {
        test_ft_strlcat();
    } else if (strcmp(str, "ft_strlcpy") == 0) {
        test_ft_strlcpy();
    } else if (strcmp(str, "ft_atoi") == 0) {
        test_ft_atoi();
    } else if (strcmp(str, "ft_memcmp") == 0) {
        test_ft_memcmp();
    } else if (strcmp(str, "ft_memcpy") == 0) {
        test_ft_memcpy();
    } else if (strcmp(str, "ft_memset") == 0) {
        test_ft_memset();
    } else if (strcmp(str, "ft_memmove") == 0) {
        test_ft_memmove();
    } else if (strcmp(str, "ft_calloc") == 0) {
        test_ft_calloc();
    } else if (strcmp(str, "ft_strdup") == 0) {
        test_ft_strdup();
    } else if (strcmp(str, "ft_memchr") == 0) {
        test_ft_memchr();
    } else if (strcmp(str, "ft_bzero") == 0) {
        test_ft_bzero();
    } else {
        printf("Invalid test name: %s\n", str);
    }
}
int main(int ac, char *av[])
{
    (void) ac;
    (void) av;
    
        if (ac > 1 ) run_test(av[1]);

    return 0;
}