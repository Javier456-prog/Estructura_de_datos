def fib_fuerza_bruta(n):

    if n <= 1:
        return n

    return fib_fuerza_bruta(n - 1) + fib_fuerza_bruta(n - 2)
