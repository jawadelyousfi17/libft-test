#include <stdio.h>
#include <assert.h>
#include "libft.h"
#include <ctype.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include "test.h"


void run_test(char *str) {
    struct {
        char *name;
        void (*test_func)(void);
    } tests[] = {
        {"ft_strlen", test_ft_strlen},
        {"ft_isalnum", test_ft_isalnum},
        {"ft_isalpha", test_ft_isalpha},
        {"ft_isascii", test_ft_isascii},
        {"ft_isdigit", test_ft_isdigit},
        {"ft_isprint", test_ft_isprint},
        {"ft_strncmp", test_ft_strncmp},
        {"ft_strnstr", test_ft_strnstr},
        {"ft_strrchr", test_ft_strrchr},
        {"ft_tolower", test_ft_tolower},
        {"ft_toupper", test_ft_toupper},
        {"ft_strchr", test_ft_strchr},
        {"ft_strlcat", test_ft_strlcat},
        {"ft_strlcpy", test_ft_strlcpy},
        {"ft_atoi", test_ft_atoi},
        {"ft_memcmp", test_ft_memcmp},
        {"ft_memcpy", test_ft_memcpy},
        {"ft_memset", test_ft_memset},
        {"ft_memmove", test_ft_memmove},
        {"ft_calloc", test_ft_calloc},
        {"ft_strdup", test_ft_strdup},
        {"ft_memchr", test_ft_memchr},
        {"ft_bzero", test_ft_bzero},
        {"ft_itoa", test_ft_itoa},
        {"ft_split", test_ft_split},
        {"ft_striteri", test_ft_striteri},
        {"ft_strjoin", test_ft_strjoin},
        {"ft_strmapi", test_ft_strmapi},
        {"ft_strtrim", test_ft_strtrim},
        {"ft_substr", test_ft_substr},
        {NULL, NULL} // Sentinel value
    };

    for (int i = 0; tests[i].name != NULL; i++) {
        if (strcmp(str, tests[i].name) == 0) {
            tests[i].test_func();
            return;
        }
    }

    printf("Invalid test name: %s\n", str);
}


int main(int ac, char *av[])
{
    (void) ac;
    (void) av;
    
        if (ac > 1 ) run_test(av[1]);

    return 0;
}