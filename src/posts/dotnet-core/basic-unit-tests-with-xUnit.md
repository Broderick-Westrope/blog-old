---
icon: fluent-mdl2:test-case
date: 2023-07-05
tag:
    - xUnit
    - Testing
    - Fluent Assertions
---

# Basic Unit Tests with xUnit

NOTE: This post is a draft. Please leave lots of feedback!

Testing your code lets you easily find errors, enforce a certain set of rules when working with others, and makes you think twice before making a potentially breaking change. If you haven't already, you should do some reading on TDD (Test Driven Development). It isn't a prerequisite for understanding this post, but helps you be a better developer by making it hard to do the wrong thing.

The goal of this post is to learn how to configure and use xUnit to perform unit testing with C# in .NET Core. It will touch on conventions such as the Should naming convention, and the arrange-act-assert (AAA) test structure. We will also look at how Fluent Assertions can be used to make tests cleaner and to test more things. You can read more about some of the best practices I discuss (and more) on [this Microsoft page](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices).

## Project Setup

*NOTE: For this project I will be using Rider 2023.1.3, but the setup is very similar in Visual Studio. I will also be using .NET Core 6 and C# 10.*

From the Rider welcome screen, choose "New Solution" (top right). Be sure to choose the project type "Unit Test Project" under the heading ".NET/.NET Core" ([more on .NET Core vs .NET Framework](https://www.netsolutions.com/insights/net-core-vs-net-framework/)) and fill in the following details:

- **Solution Name**: This is the name of the solution to create. A solution is a container for related projects and information about those projects such as build configurations, IDE settings, etc.
- **Project Name**: This is the name of the specific *Unit Test Project* we are making. This will contain all the test code we are going to write.
- Solution Directory: Where the project will be created on your machine.
- **Create Repository**: Whether or not you create a repository for VC (Version Control) is up to you. VC is not covered in this post, but if you'd like to learn Git (my preferred VC system), free to read through [this great article](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud) on Git by Atlassian.
- **SDK**: Which version of the .NET Core SDK ([Software Development Kit](https://learn.microsoft.com/en-us/dotnet/core/sdk)) to use for this project. I am using version 6 - because it is LTS ([Long Term Support](https://www.linkedin.com/pulse/long-term-support-jasper-siegmund-1e/)) - but feel free to use any similar version.
- **Type**: This determines which .NET testing framework the project template will use. This post is focussing on xUnit. [This site](https://www.lambdatest.com/blog/nunit-vs-xunit-vs-mstest/) gives a good comparison between the three popular .NET testing frameworks.

Rider-new-solution.png "Create a new Unit Test Project."

Once you press "Create", Rider will open a template test file (eg. `UnitTest1.cs`). If you have no file or it looks different, make the changes needed to have a test class containing a method `Test1` with the `[Fact]` attribute above it (more on what this is later).

Empty-project.png "The template test file in the empty project."

## A Simple Test

We will now use the `Test1` method to create a test that checks that $1+1=2$ is true. For this simple test all we need is to call `Assert.Equals` with the values like so:

```cs
[Fact]
public void Test1()
{
    Assert.Equal(2, 1 + 1);
}
```

Now, if you run the test using the Play/Run button next to the test you should see a window pop up showing the result of `Test1` as success. As seen below, my Run button is now a green tick showing the test has successfully run.

Test-run-button.png "The test play/run button and test result window."

## AAA Structure

AAA (aka arrange-act-assert) is a popular way of structuring .NET tests. To do this we create headings within the test for arrange, act, and assert using comments. We split our code into each of these headings:
- Arrange: This is where initial variables are setup. Anything that needs to be done before the test subject (eg. method being tested) is called.
- Act: This should just contain the test subject mentioned in the previous point. For unit tests, this is usually calling the method being tested and storing the returned result (if there is one) in a variable.
- Assert: This is where we test the outcome of the test subject. There can be many lines of testing under this heading. These test lines determine whether the test passes or fails, and define the criteria for the methods success. 

To add the AAA Structure to our simple test all we need to do is  the following.

```cs
[Fact]
public void Test1()
{
    // arrange
    var one = 1;
    var two = 2;
    
    // act
    var sum = one + one;
    
    // assert
    Assert.Equal(two, sum);
}
```

This allows us to split the concerns into separate sections that are easily understandable by other developers. For such a simple test this is clearly overcomplicating the test, but when testing more complicated methods and introducing auto-generated data (more on this later) we reap the rewards of having a simple, consistent structure.

## Should Naming Convention

Another thing to think about is how we are going to consistently name the test classes and methods. There are a lot of good schools of thought on this, and it often boils down to opinion. My preferred convention is the Should naming convention. Read about other naming conventions [here](https://levelup.gitconnected.com/here-are-my-top-5-naming-patterns-for-unit-tests-in-c-b8305075aa9e).

To introduce the Should naming convention to this test I will rename the class to `SystemShould` and the method to `SumCorrectly`:

Should-naming.png "The new file, class, and method names."

## Fluent Assertions

[Fluent Assertions](https://fluentassertions.com/) is a great package for .NET testing. It contains a plethora of extension methods to make your tests more thorough, less verbose, and easier to read.

To use the package we must first install it. I installed it using Riders NuGet interface, but the equivalent can be done using the dotnet CLI (Command Line Interface):

```
> dotnet add package FluentAssertions --version 6.11.0
```

Rider-fa-nuget.png "The Rider NuGet interface adding Fluent Assertions."

In our example test we are currently using `Assert.Equal` to check whether `sum` contains the value as `two`. We can replace this line using the equivalent from Fluent Assertions:

```cs
// assert
sum.Should().Be(two);
```

## Conclusion

And it's that easy! Although we only did one simple test, hopefully that gives you enough to start experimenting with what other Fluent Assertions methods are available and applying it to your own projects. As always, if you have questions or feedback on how I can make this post better feel free to [email me](mailto:broderickwestrope@gmail.com) or leave a comment below. Happy coding!