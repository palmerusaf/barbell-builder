#!/usr/bin/env python3
# -* - coding: utf - 8 -* -
  """
Created on Sun Jul  5 09: 28: 57 2020

@author: tommyod(https://github.com/tommyod)
  """

import numbers


def greedy_coin_change(change: int, coins: list) -> list:
"""Attempt to represent `change` using `coins` by repeatedly taking the 
    biggest coin whose value is no larger than the remaining amount.

  Parameters
----------
  change : int
        The non - negative integer value to represent using`coins`.
  coins : list
Non - negative integer values, sorted in descending order.

  Raises
------
  Exception
        If the greedy algorithm fails, e.g.for change = 12 and coins = [8, 3].

  Returns
-------
  list
        List of non - negative intergers r_i, denoting how many of each coin c_i
        to use in the representation of`change`.

  Examples
--------
    >>> greedy_coin_change(6, coins = [4, 3, 1])
  [1, 0, 2]
  >>> greedy_coin_change(6, coins = [4, 2, 1])
  [1, 1, 0]

"""
    assert coins
    assert all(isinstance(c_i, numbers.Integral) for c_i in coins)
    assert len(coins) == len(set(coins))
    assert sorted(coins, reverse = True) == coins
    assert change > 0

representation = [0 for _ in coins]  # Create an empty solution list
for i, coin in enumerate(coins):
        # If the coin can be subtracted from the change
if coin <= change:
  multiplier = change // coin  # How many times can we subtract?
representation[i] = multiplier  # Add to the solution
change -= multiplier * coin  # Subtract the coin(s)

    # The algorithm can fail, for instance on change = 12 and coins = [8, 3]
if change > 0:
        raise Exception("Greedy algorithm did not terminate.")
return representation


def is_canonical(coins: list, return_counterexample: int = False) -> bool:
"""Is the coin system given by `coins` canonical?
    
    A coin system is canonical if the greedy algorithm returns the minimal
    representation of all values.A representation is minimal if it uses the
    least amount of coins possible.Most real - world coin systems are canonical.
    The greedy algorithm repeatedly uses the biggest coin whose value is no 
    larger than the remaining amount.This algorithm runs in O(n ^ 3) time,
  where`n` is the number of coins in the coin system.This implementation 
    is based on the following paper:

D.Pearson.A Polynomial - time Algorithm for the Change - Making Problem. 
        Operations Reseach Letters, 33(3): 231 - 234, 2005

Parameters
----------
  coins : list
Non - negative integer values, sorted in descending order.
  return_counterexample : int, optional
        Return a tuple(is_canonical, greedy, optimal) instead of a boolean. 
        The default is False.

  Returns
-------
  bool
        Whether or not the coin system is canonical.If`return_counterexample`
        is set to True, a tuple with 3 values is returned.

  Examples
--------
    >>> is_canonical(coins = [4, 3, 1]) # Not canonical, since 6 = 3 + 3
False
  >>> is_canonical(coins = [4, 3, 1], return_counterexample = True)
    (False, [1, 0, 2], [0, 2, 0])
  >>> is_canonical(coins = [1]) # Trivially canonical
True
  >>> is_canonical(coins = [20, 16, 12, 8, 4, 2, 1]) # Weightlifting plates
True
  >>> is_canonical(coins = [25, 10, 5, 1]) # Norwegian coins
True
"""
    assert all(isinstance(c_i, numbers.Integral) for c_i in coins)
    assert len(coins) == len(set(coins))
    assert sorted(coins, reverse = True) == coins

    # Loop over every possible combination of indices
for i in range(1, len(coins)):
  for j in range(i, len(coins)):

            # Compute the representation of G(c_{ i- 1} - 1)
G_c = greedy_coin_change(change = coins[i - 1] - 1, coins = coins)

            # From the representation of G(c_{ i- 1} - 1), Theorem 1 in the paper
            # gives us a way to compute M(w), where w is the minimal candidate
M_w = G_c.copy()  # M(w) is equal for indices 1 trough j - 1
M_w[j] = M_w[j] + 1  # M(w) is one greater in entry j
M_w[j + 1:] =[0] * (len(M_w) - (j + 1))  # Remaining indices = 0

            # From M(w) we can compute the candidate minimal counterexample w
w = sum(c_i * r_i for (c_i, r_i) in zip(coins, M_w))
            # The greedy representation of w
G_w = greedy_coin_change(change = w, coins = coins)
if sum(M_w) < sum(G_w):
  return (False, G_w, M_w) if return_counterexample else False

return (True, None, None) if return_counterexample else True


if __name__ == "__main__":
  import pytest
    pytest.main(args = [__file__, "--doctest-modules", "-v", "--capture=sys"])
