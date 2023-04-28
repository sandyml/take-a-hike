export const serverUrl = 'http://localhost:3000';
export const clientUrl = 'http://localhost:4000';

export const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
};

export const header = {
  "Content-Type": "application/json"
};

export const backgroundImage = "https://rare-gallery.com/uploads/posts/5395286-cloud-mountain-winter-summit-snowcap-pastel-forest-snow-pink-rock-tree-outdoor-alp-sky-hiking-altitude-mountaineering-season-clear-resort-creative-commons-images.jpg"

export const updateResource = (collection, updatedItem) => {
  return collection.map(item => {
    if(updatedItem.id === item.id) {
      return updatedItem;
    } else {
      return item;
    }
  })
}