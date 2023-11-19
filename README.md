**# 034.lesson_14**

**Description:**
Create a simplified version of the "Tetris" game, where the primary element is a cube. This cube automatically moves down 50 pixels every second. The player can move the cube left and right, but cannot move it once it reaches the bottom of the playing area. The cube should not exit the boundaries of the user's screen.

**Technical Requirements:**
1. Core Functionality:
- Visualize a cube that can move down 50 pixels every second.
- Add the ability for the player to move the cube left and right using control keys.
- Ensure the cube stops when it reaches the bottom of the playing field.

2. User Interface:
- Create a simple interface that displays the playing field.
- The playing field should have boundaries to prevent the cube from going out of its limits.

3. Game Logic:
- The cube should not cross or exit the boundaries of the playing field.
- Once the cube reaches the bottom, it should be "locked" and no longer able to move.

4. Additional Requirements:
- Pay attention to code cleanliness and structure.
- Ensure that the game operates error-free.

**Extra Tasks (Optional):**
1. Implement a Scoring System:
- Add a scoring system, for example, points for each downward movement.

2. Multiple Cubes:
- Allow cubes to accumulate at the bottom of the playing field. When a new cube reaches other cubes or the bottom, it should be locked in place.

3. Variety of Shapes:
- Introduce different shapes, not just a cube.

**Resources and Tips:**
- Use setInterval or SetTimeout for moving the cube downwards.
- Handle key presses using addEventListener.
- Manage styles with JavaScript to move the cube.

**Submission:**
- Your project should be available in a GitHub repository with clear instructions on how to run it in README.md.
- Ensure your code is organized and readable.
