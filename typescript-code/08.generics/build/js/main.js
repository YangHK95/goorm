"use strict";
class Post {
    // public id: number = 0 // public는 public, protected는 protected, private는 private 앞에 설정 하던지 아니면 constructor에서 설정해야한다.
    // public title: string = ""
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.id = id;
        this.title = title;
    }
    getPosts() {
        return `postId${this.id},postTite${this.title}`;
    }
}
class PostB extends Post {
    getPost() {
        return this.title;
    }
}
const post = new Post(1, "title1");
console.log(post.id);
console.log(post.title);
