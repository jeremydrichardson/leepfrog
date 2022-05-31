# Code Project

## Platform

I chose to do this in React as my evaluation of the problem was that it should be solved in the frontend. In the end it is essentially providing a component `<SiteNav>` (React components are just functions) that takes in the campus. The state of which menu item is active is tracked in `<SiteNav>` so that it is functional in the browser.

## View the Code

I have provided a link to a CodeSandbox where the project code can both be viewed and run.

https://codesandbox.io/s/leepfrog-gfhsz7

The code can also be viewed on GitHub at https://github.com/jeremydrichardson/leepfrog.

## Time spent

I would say I spent roughly 6hrs on this project. Most of it was searching on how best to navigate the tree. I still think there is a better solution where you do not need to use recursion but only loop over the navlinks once. In this example the performance difference is basically nothing, I guess I just always think about how it would scale.

Once I decided on the tree methodology, the actual implementation was about 2hrs.
