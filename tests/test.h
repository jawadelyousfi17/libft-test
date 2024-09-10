#ifndef TEST_H
#define TEST_H

void test_ft_isalpha();
void test_ft_isdigit();
void test_ft_isalnum();
void test_ft_isascii();
void test_ft_isprint();
void test_ft_strlen();
void test_ft_toupper();
void test_ft_tolower();
void test_ft_strchr();
void test_ft_strrchr();
void test_ft_strncmp();
void test_ft_strlcpy();
void test_ft_strlcat();  // need bsd/string.h
void test_ft_strnstr();  // need bsd/string.h
void test_ft_atoi();
void test_ft_memset();
void test_ft_memcmp();
void test_ft_memcpy();
void test_ft_memmove();
void test_ft_memchr();
void test_ft_bzero();
void test_ft_strdup();
void test_ft_calloc();

int is_bzero(void *ptr, size_t n);
int is_not_bzero(void *ptr, size_t start, size_t n);


#endif 