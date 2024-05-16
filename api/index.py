from flask import Flask

app = Flask(__name__)

eggDirections = [
  {"text": "Gather all ingredients", 
  "images": [{
    "src": "https://www.allrecipes.com/thmb/8Sh854Yx4Ys7CMeSg_1dMTjXvBM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-001-f333435c6f174a54877c8d6cf228b2ac.jpg",
    "attr": "DOTDASH MEREDITH FOOD STUDIOS"}]
  },
  {"text": "Break the eggs into a microwave-proof mixing bowl. Add milk and salt; mix well.", 
  "images": [
    {"src": "https://www.allrecipes.com/thmb/BqQp0DjsNBGMTlrS9Xr-tBiQw8c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-002-e26696f3233d49fe926295cca75ca622.jpg",
    "attr": ""}, 
    {"src": "https://www.allrecipes.com/thmb/hNxjOkQpAGYPJ_R9pVAY73_oxMA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-005-a1e93fa280a34a4ea889c49ec0c9ca8c.jpg", 
    "attr": "DOTDASH MEREDITH FOOD STUDIOS"}]
  },
  {"text": "Pop the bowl into the microwave and cook on high power for 30 seconds. Remove bowl, beat eggs very well, scraping down the sides of the bowl, and return to the microwave for another 30 seconds.", 
  "images": [{
    "src": "https://www.allrecipes.com/thmb/4i4yJ8SYqVhxcGTof7HVdWzhw-M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-008-f128d77189c247b796f830c3f654ac3d.jpg",
    "attr": "DOTDASH MEREDITH FOOD STUDIOS"}]
  },
  {"text": "Repeat this pattern, stirring every 30 seconds for up to 2 1/2 minutes. Stop when eggs have the consistency you desire.", 
  "images": [{
    "src": "https://www.allrecipes.com/thmb/Zap-2MYfJ4bTvPAJDHmcwbpUKCU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/272293-Fluffy-Microwave-Scrambled-Eggs-mfs-STEP-009-bce2d1a412a5447bbe4389aa2e06d47d.jpg",
    "attr": "DOTDASH MEREDITH FOOD STUDIOS"}]
  },
  {"text": "Serve warm and enjoy!", 
  "images": [{
    "src": "https://www.allrecipes.com/thmb/Kx1T75MDHIeMkr2BF5DZ8LEKrmM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/272293-fluffy-microwave-scrambled-eggs-DDMFS-4x3-5b0c4f0fc5b4464e8ba1d1886667631e.jpg",
    "attr": "DOTDASH MEREDITH FOOD STUDIOS"}]
  }]

chimDirections = [{
  "text": "Combine parsley, oil, vinegar, oregano, cumin, garlic, hot sauce, and salt in a blender or food processor. Mix on medium speed until ingredients are evenly blended, about 10 seconds.", 
  "images": [{
    "src": "https://www.allrecipes.com/thmb/ngixLJDyfzkTRcHDinDDuMlkKB4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1028889-80254433747e42bfb5ceaf2561f627ce.jpg",
    "attr": ""}]}]

recipes = [{
  "id": 0,
  "title": "Fluffy Microwave Scrambled Eggs",
  "summary": "Use your microwave to make light and fluffy scrambled eggs for a quick and easy breakfast to start your day. Follow the technique in this recipe for perfect results every time.",
  "prepTimeMinutes": 4,
  "cookTimeMinutes": 5,
  "totalTimeMinutes": 10,
  "servings": 2,
  "yields": "3 servings",
  "ingredients": ["4 eggs", "1/4 milk", "1/8 teaspoon salt"],
  "directions": eggDirections,
  "tags": ["breakfast", "brunch", "quick"]
}, 
{
  "id": 1,
  "title": "Chimichurri Sauce",
  "summary": "This famous Argentinian chimichurri sauce is perfect for any grilled chicken, meat, or fish. My catering customers love it on garlic crostini with grilled flank steak slices.",
  "prepTimeMinutes": 5,
  "cookTimeMinutes": 0,
  "totalTimeMinutes": 12,
  "servings": 2,
  "yields": "1 1/2 cups",
  "ingredients": ["1 cup fresh parsley", "3/4 cup extra virgin olive oil", "3 tablespoons red wine vinegar", "2 tablespoons dried oregano", "2 teaspoons ground cumin", "1 1/2 teaspoons minced garlic", "1 1/2 teaspoons pepper sauce (such as Frank's Red Hot)"],
  "directions": chimDirections,
  "tags": ["dinner", "lunch", "grilling"]
}]

@app.route("/api/recipe/<int:recipe_id>")
def getRecipeByTitle(recipe_id):
  recipe = [recipe for recipe in recipes if recipe["id"] == recipe_id]
  if len(recipe) == 1:
    return recipe[0]
  else:
    return 404

# @app.route("/api/recipe/<string:recipe_title>")
# def getRecipeByTitle(recipe_title):
#   for recipe in recipes:
#     if recipe["title"] == recipe_title:
#       return recipe
#     else:
#       return 404


@app.route("/api/recipe/topic/<string:topic_name>")
def getRecipesByTopic(topic_name):
  topic_recipes = {"topic": topic_name, "recipes": []}
  for recipe in recipes:
    if topic_name in recipe["tags"]:
      topic_recipes["recipes"].append({"id": recipe["id"], "title": recipe["title"]})
  return topic_recipes