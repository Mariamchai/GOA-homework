import pygame
import sys
import random

pygame.init()

screen = pygame.display.set_mode((800, 600))
pygame.display.set_caption("Simple Game with Pygame")

clock = pygame.time.Clock()

BLACK = (0, 0, 0)
GREEN = (0, 255, 0)
RED = (255, 0, 0)
WHITE = (255, 255, 255)
BLUE = (0, 0, 255)

class Player(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image = pygame.Surface((50, 50))
        self.image.fill(GREEN)
        self.rect = self.image.get_rect()
        self.rect.center = (400, 550)
        self.speed = 5

    def update(self):
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT]:
            self.rect.x -= self.speed
        if keys[pygame.K_RIGHT]:
            self.rect.x += self.speed

        if self.rect.left < 0:
            self.rect.left = 0
        if self.rect.right > 800:
            self.rect.right = 800


class Obstacle(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image = pygame.Surface((50, 50))
        self.image.fill(RED)
        self.rect = self.image.get_rect()
        self.rect.x = random.randint(0, 750)
        self.rect.y = random.randint(-100, -40)
        self.speed = random.randint(2, 6)

    def update(self):
        self.rect.y += self.speed
        if self.rect.top > 600:
            self.rect.x = random.randint(0, 750)
            self.rect.y = random.randint(-100, -40)
            self.speed = random.randint(2, 6)

class Button:
    def __init__(self, text, pos, font, bg="black", feedback=""):
        self.x, self.y = pos
        self.font = pygame.font.SysFont("Arial", font)
        if feedback == "":
            self.feedback = "text"
        else:
            self.feedback = feedback
        self.change_text(text, bg)

    def change_text(self, text, bg="black"):
        self.text = self.font.render(text, True, WHITE)
        self.size = self.text.get_size()
        self.surface = pygame.Surface(self.size)
        self.surface.fill(bg)
        self.surface.blit(self.text, (0, 0))
        self.rect = pygame.Rect(self.x, self.y, self.size[0], self.size[1])

    def show(self):
        screen.blit(self.surface, (self.x, self.y))

    def click(self, event):
        x, y = pygame.mouse.get_pos()
        if event.type == pygame.MOUSEBUTTONDOWN:
            if pygame.mouse.get_pressed()[0]:
                if self.rect.collidepoint(x, y):
                    return True
        return False

player = Player()
all_sprites = pygame.sprite.Group()
all_sprites.add(player)
obstacles = pygame.sprite.Group()
for _ in range(10):
    obstacle = Obstacle()
    all_sprites.add(obstacle)
    obstacles.add(obstacle)


score = 0
font = pygame.font.SysFont(None, 36)
def display_score():
    text = font.render(f"Score: {score}", True, WHITE)
    screen.blit(text, (10, 10))
start_button = Button("Start Game", (350, 275), 36,
                      bg=BLUE, feedback="Start Game")
game_started = False
game_over = False
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.MOUSEBUTTONDOWN and not game_started:
            if start_button.click(event):
                game_started = True
                game_over = False
                score = 0
    if game_started and not game_over:
        all_sprites.update()
        if pygame.sprite.spritecollide(player, obstacles, False):
            game_over = True
        score += 1
    screen.fill(BLACK)
    if game_started:
        all_sprites.draw(screen)
        display_score()
        if game_over:
            game_over_text = font.render("Game Over", True, WHITE)
            screen.blit(game_over_text, (350, 300))
    else:
        start_button.show()
    pygame.display.flip()
    clock.tick(60)
