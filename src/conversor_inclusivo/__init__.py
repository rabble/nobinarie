# -*- coding: utf-8 -*-

"""
conversor_inclusivo

A Python library to convert standard Spanish dictionaries into inclusive language versions,
focusing on Rioplatense Spanish patterns.
"""

__version__ = "0.1.0"  # Initial version

# Import key components to make them available at the package level
from .conversor import ConversorInclusivo

# Define what gets imported with 'from conversor_inclusivo import *'
__all__ = ['ConversorInclusivo']
