from functools import cache


@cache
def fib_memo(n):

    if n <= 1:
        return n

    return fib_memo(n - 1) + fib_memo(n - 2)
