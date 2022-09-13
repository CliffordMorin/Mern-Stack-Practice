defmodule Play do
    def play do
        IO.puts "Playing"
    end
end

defmodule Fib do
    def fib(0), do: 1
    def fib(1), do: 1
    def fib(n) when n >= 2, do: fib(n-2) + fib(n-1)
end

defmodule Sum do 
    def sum([]), do: 0
    def sum([head | tail]), do: head + sum(tail)
end