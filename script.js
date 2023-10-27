/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here
    class ContentItem {
      constructor(id, name, description, category_genre) {
          this.id = id;
          this.name = name;
          this.description = description;
          this.category_genre = category_genre;
      }
      updateContentItem(id, name, description, category_genre) {
          if (id === this.id) {
              if (name !== null) {
                  this.name = name;
              }
  
              if (description !== null) {
                  this.description = description;
              }
  
              if (category_genre !== null) {
                  this.category_genre = category_genre;
              }
          }
      }
      toString() {
          return `<div id = "content-item-${this.id}">
          <h2>${this.name}</h2>
          <p>${this.description}</p>
          <div>${this.category_genre}</div>
          </div>`;
      }
    }
    const ContentItems = [
      new ContentItem(
         0,
         "Mastaney",
         "Mastaney is a historical action drama film released in 2023 in the Punjabi language in India. Tarsem Jassar and Gurpreet Ghuggi play the main roles, while Simi Chahal and Karamjit Anmol play supporting parts.",
         "History"
      ),
      new ContentItem(
          1,
          "Carry on Jatta 3",
          "Carry On Jatta 3, often referred to as COJ3, is a 2023 comedy film in the Indian Punjabi language, produced by Humble Motion Pictures and directed by Smeep Kang. A follow-up to Carry on Jatta (2012) and Carry On Jatta 2 (2018)",
          "Comedy"
      ),
      new ContentItem(
          2,
          "Moosa Jatt",
          "Moosa, a young orphan, is determined to stop the abuse of Punjabi farmers and exact revenge for the death of his family. When the murder's true motive becomes apparent, though, everything becomes twisted.",
          "Action"
      ),
      new ContentItem(
          3,
          "Rabb Da Radio 2",
          "When Manjinder Singh (Tarsem Jassar) brings his recently married wife Guddi (Simi Chahal) to his mother's house, he is devastated to discover that things have changed from 16 years ago.",
          "Drama/Family Drama"
      ),
      new ContentItem(
          4,
          "Oh My Pyo",
          "A mobster wants to make sure that one of his unmotivated sons will take over his company when he retires, but not before he completes his schooling.",
          "Romance/Comedy"
      ),
    ];
    $("#content-item-list").css({
      border: "2px solid #333",
      width: "70%",
      padding: "20px",
      margin: "20px auto",
    });
    const contentList = $
    ("#content-item-list");
  
    ContentItems.forEach((item) => {
      const contentHTML = item.toString();
      contentList.append(contentHTML);
    });
   
    $('#updateSuccess').click(function () {
      contentItems[0].updateContentItem(0, "Dessert Dreams", null, "Culinary Arts");
  
      contentList.empty();
      contentItems.forEach((item) => {
          const contentHTML = item.toString();
          contentList.append(contentHTML);
      });
    });
  
    $('#updateFail').click(function () {
      contentItems[1].updateContentItem(1, null, "This should not work", null);
  
      contentList.empty();
      contentItems.forEach((item) => {
          const contentHTML = item.toString();
          contentList.append(contentHTML);
      });
  });
  });